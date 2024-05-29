function merge <T extends object, P extends object> (objA:T, objB:P):T&P {
  return Object.assign(objA, objB);
}
