import StateLoader from './src/loader.js';
import './src/persistence.js';

export const initializePersistence = async () => {
    return await StateLoader.load();
}
