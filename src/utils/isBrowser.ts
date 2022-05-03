const isBrowser = () => {
  return typeof process !== "object";
};

export default isBrowser;
