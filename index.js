// import all Singleton classes/instances
import LoggerUtility_NotSingleton from './_Creational_Design_Patterns/Singleton/InitialClass_NotSingleton';
import singleton1 from './_Creational_Design_Patterns/Singleton/Singleton';
import singleton2 from './_Creational_Design_Patterns/Singleton/Singleton2';

import * as Observer from './_Behavioral_Design_Patterns/Observer/Observer';

import * as Adapter from './_Structural_Design_Patterns/Adapter/Adapter';

/* 

    Make all Singleton class examples global and executable
    from the browser console.

*/

window.singleton1 = singleton1; // This is not an exported class so does not have constructor
window.singleton2 = singleton2;
window.LoggerUtility_NotSingleton = LoggerUtility_NotSingleton;

// Observer Classes
window.Subject = Observer.Subject;
window.ObserverList = Observer.ObserverList;

// Adapter Classes
window.Adapter = Adapter;