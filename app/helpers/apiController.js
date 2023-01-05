export default(controller) => async (req, res, next) => {
  try {
    await controller(req, res, next);
  } catch (err) {
    console.log('err:', err);
    next(new ApiError(err.statusCode, err.message));

  }
};
