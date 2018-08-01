import Loader from './src/loader.js';
import './src/persistence.js';

export const initializePersistence = async () => {
    return await Loader.load();
}
