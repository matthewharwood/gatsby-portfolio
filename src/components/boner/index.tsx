import React, { createRef, useEffect, FunctionComponent } from 'react';
import { mat4, vec3, quat } from 'gl-matrix';
import { useStyletron } from 'baseui';
import { Props } from './types';

const vs = `
  attribute vec4 coords;
  uniform mat4 transformMatrix;
  attribute vec3 normal;
  attribute vec4 colors;
  uniform vec3 lightColor;
  uniform vec3 lightDirection;
  varying vec4 varyingColors;
  uniform mat4 perspectiveMatrix;
  void main(void) {
    vec3 norm = normalize(normal);
    vec3 ld = normalize(lightDirection);
    float dotProduct = max(dot(norm, ld), 0.0);
    vec3 vertexColor = lightColor * colors.rgb * dotProduct;
    varyingColors = vec4(vertexColor, 1);
    gl_Position = perspectiveMatrix * transformMatrix  * coords;
  }
`;

const fs = `
  precision mediump float;
  uniform vec4 color;
  varying vec4 varyingColors;
  void main(void) {
    gl_FragColor = varyingColors;
  }
`;

let gl: any,
  shaderProgram: any,
  vertices,
  // eslint-disable-next-line prefer-const
  matrix = mat4.create(),
  vertexCount: any;

const q = quat.create(),
  translate = [-3, 0, -10],
  scale = [1, 1, 1],
  pivot = [-1, 0, 0],
  translate2 = [-2, 0, -10],
  q2: number[] = [0, 0, 0.8, 0],
  scale2 = [3, 1, 1],
  pivot2 = [-1, 0, 0];

function initGL(canvasRef: any, size?: number) {
  const { current: canvas } = canvasRef;
  canvas.width = size || document.body.clientWidth;
  canvas.height = size || document.body.clientHeight;
  gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  if (!gl) {
    alert(
      'Unable to initialize WebGL. Your browser or machine may not support it.'
    );
    return;
  }
  gl.enable(gl.DEPTH_TEST);
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(1, 1, 1, 0);
}

function createShaders() {
  const vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vs);
  gl.compileShader(vertexShader);
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, fs);
  gl.compileShader(fragmentShader);

  shaderProgram = gl.createProgram();

  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);
  gl.useProgram(shaderProgram);
}

function createVertices(canvasRef: any) {
  const { current: canvas } = canvasRef;
  vertices = [
    [-1, -1, -1, 1, 0, 0, 1], // 0
    [1, -1, -1, 1, 1, 0, 1], // 1
    [-1, 1, -1, 0, 1, 1, 1], // 2
    [1, 1, -1, 0, 0, 1, 1], // 3
    [-1, 1, 1, 1, 0.5, 0, 1], // 4
    [1, 1, 1, 0.5, 1, 1, 1], // 5
    [-1, -1, 1, 1, 0, 0.5, 1], // 6
    [1, -1, 1, 0.5, 0, 1, 1], // 7
  ];

  const normals = [
    [0, 0, 1],
    [0, 1, 0],
    [0, 0, -1],
    [0, -1, 0],
    [-1, 0, 0],
    [1, 0, 0],
  ];

  const indices = [
    [0, 1, 2, 1, 2, 3],
    [2, 3, 4, 3, 4, 5],
    [4, 5, 6, 5, 6, 7],
    [6, 7, 0, 7, 0, 1],
    [0, 2, 6, 2, 6, 4],
    [1, 3, 7, 3, 7, 5],
  ];

  const attributes = [];
  for (let side = 0; side < indices.length; ++side) {
    for (let vi = 0; vi < indices[side].length; ++vi) {
      attributes.push(...vertices[indices[side][vi]]);
      attributes.push(...normals[side]);
    }
  }

  vertexCount = attributes.length / 10;

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(attributes), gl.STATIC_DRAW);

  const coords = gl.getAttribLocation(shaderProgram, 'coords');
  gl.vertexAttribPointer(
    coords,
    3,
    gl.FLOAT,
    false,
    Float32Array.BYTES_PER_ELEMENT * 10,
    0
  );
  gl.enableVertexAttribArray(coords);

  const colorsLocation = gl.getAttribLocation(shaderProgram, 'colors');
  gl.vertexAttribPointer(
    colorsLocation,
    4,
    gl.FLOAT,
    false,
    Float32Array.BYTES_PER_ELEMENT * 10,
    Float32Array.BYTES_PER_ELEMENT * 3
  );
  gl.enableVertexAttribArray(colorsLocation);

  const normalLocation = gl.getAttribLocation(shaderProgram, 'normal');
  gl.vertexAttribPointer(
    normalLocation,
    3,
    gl.FLOAT,
    false,
    Float32Array.BYTES_PER_ELEMENT * 10,
    Float32Array.BYTES_PER_ELEMENT * 7
  );
  gl.enableVertexAttribArray(normalLocation);

  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  const lightColor = gl.getUniformLocation(shaderProgram, 'lightColor');
  gl.uniform3f(lightColor, 1, 1, 1);

  const lightDirection = gl.getUniformLocation(shaderProgram, 'lightDirection');
  gl.uniform3f(lightDirection, 0.5, 0.5, -1);

  const perspectiveMatrix = mat4.create();
  mat4.perspective(perspectiveMatrix, 1, canvas.width / canvas.height, 0.1, 11);
  const perspectiveLoc = gl.getUniformLocation(
    shaderProgram,
    'perspectiveMatrix'
  );
  gl.uniformMatrix4fv(perspectiveLoc, false, perspectiveMatrix);
  mat4.translate(matrix, matrix, [0, 0, -4]);
}

let rafId: any = null;
const easeInCirc = (t: any) => t * t * t;
let quatT = null;
const offset = 0.5;
let transT = null;
let scaleT = null;
let pivotT = null;
let start = 0;
const finishTimeMs = 1500;

function draw(timeMs: number) {
  if (!start) {
    start = timeMs;
  }

  rafId = requestAnimationFrame(draw);
  const interval = Math.max(0, timeMs - start) / finishTimeMs; // 1500 ms are 1.5 seconds
  const t = interval - Math.floor(interval);

  transT = vec3.lerp(vec3.create(), translate, translate2, t); // ?
  scaleT = vec3.lerp(vec3.create(), scale, scale2, t);
  pivotT = vec3.lerp(vec3.create(), pivot, pivot2, t);
  if (t >= offset) {
    // @ts-ignore
    quatT = quat.slerp(quat.create(), q, q2, easeInCirc(t - offset));
  } else {
    quatT = quat.create();
  }

  if (timeMs >= Math.floor(finishTimeMs + start - 1)) {
    cancelAnimationFrame(rafId);
    start = 0;
  } else {
    mat4.fromRotationTranslationScaleOrigin(
      matrix,
      quatT,
      transT,
      scaleT,
      pivotT
    );
  }

  const transformMatrix = gl.getUniformLocation(
    shaderProgram,
    'transformMatrix'
  );
  gl.uniformMatrix4fv(transformMatrix, false, matrix);

  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLES, 0, vertexCount);
}

const Boner: FunctionComponent<Props> = ({ size, pos }) => {
  const canvasRef: any = createRef();
  const [css] = useStyletron();
  const isClient = typeof window === 'object';

  useEffect(() => {
    if (isClient) {
      initGL(canvasRef, size);
      createShaders();
      createVertices(canvasRef);
      rafId = window.requestAnimationFrame(draw);

      return () => {
        window.cancelAnimationFrame(rafId);
      };
    }
  });

  return (
    <canvas
      className={css({
        position: 'fixed',
        top: pos ? pos[0] : 0,
        left: pos ? pos[3] : 0,
        zIndex: -1,
        background: 'transparent',
      })}
      width="500"
      height="500"
      ref={canvasRef}
    />
  );
};

export { Boner };
