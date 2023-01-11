export default(controller) => async (req, res, next) => {
  try {
    await controller(req, res, next);
  } catch (err) {
    console.log('err:', err);
    //todo make the erreur gestion
    //next(new ApiError(err.statusCode, err.message));

  }
};
