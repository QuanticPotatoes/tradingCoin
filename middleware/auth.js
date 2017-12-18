
export default ({ isServer, store, req }) => {
  if (isServer) {
    console.log(req);
  }
};
