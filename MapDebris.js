function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  // orbital period (T) = 2Π * (sqrt(a^3/GM))
  // a = orbit's semi-major axis, a.k.a. radius.
  const T = x => ((2 * Math.PI) * (Math.sqrt((Math.pow(earthRadius + x, 3))/GM)))

  return arr.map(satellite => {
    return {"name": satellite.name, "orbitalPeriod": Math.round(T(satellite.avgAlt))}
  })
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);