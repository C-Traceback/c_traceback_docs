const isProd = process.env.NODE_ENV === 'production';
const prefix = isProd ? '/c_traceback_docs' : '';
export default prefix