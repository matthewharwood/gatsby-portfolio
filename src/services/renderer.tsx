function componentMapFactory() {
  const componentMap = {
    "postHeader": (props: any) => console.log("POSTHEADER", props),
    "summary": (props: any) => console.log("SUMMARY", props),
  }

  let defaultValueHandler = {
    get: function(target: any, name: any) {
      return target.hasOwnProperty(name)
        ? target[name]
        : (props: any) => console.warn(
          "We are missing a component type: ", props._type, "is not found"
        );
    },
  }

  return new Proxy(componentMap, defaultValueHandler)
}

export const pageRenderer = (raw) => {

  const componentMap = componentMapFactory();

  raw.map((d) => [d._type, d]).map(([key, props]) => componentMap[key](props));
  return true
}