import ApplicationState from 'applicationstate';
import StatePersistence from '../src/persistence';
import StateLoader from '../src/loader';
import { initializePersistence } from '../index';
import Dexie from 'dexie'

window.Dexie = Dexie;
window.ApplicationState = ApplicationState;
window.StateLoader = Loader;
window.StatePersistence = StatePersistence;
window.initializePersistence = initializePersistence;

// tests
import './basic';