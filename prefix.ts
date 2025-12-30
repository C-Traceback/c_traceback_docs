const isProd = process.env.NODE_ENV === 'production';
const prefix = isProd ? '/c_traceback_web' : '';
export default prefix