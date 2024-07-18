function isValidDate(dateString) {
  if (typeof dateString !== "string") return false;
  if (dateString.length !== 10) return false;
  
  // Check if the format is MM/DD/YYYY
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  //returns true if the string match the pattern
  return regex.test(dateString);
}

module.exports = isValidDate;



/** Regex breakdown en français s'il vous plaît */

// ^ : Cette ancre affirme le début de la chaîne. Cela signifie que le motif doit commencer au début de la chaîne.
// \d{2} : Cette ancre correspond exactement à deux chiffres. \d est une classe de caractères abrégée qui signifie "tout chiffre de 0 à 9", et {2} spécifie que nous voulons exactement deux de ces chiffres.
// \N/ : Il s'agit d'une barre oblique échappée. Comme la barre oblique est utilisée comme délimiteur dans les expressions régulières JavaScript, nous devons l'échapper avec une barre oblique inverse pour la faire correspondre littéralement.
// \d{2} : Encore une fois, cela correspond exactement à deux chiffres.
// \/ : Une autre barre oblique échappée.
// \d{4} : Ceci correspond exactement à quatre chiffres.
// $ : Cette ancre affirme la fin de la chaîne. Cela signifie que le motif doit se terminer à la fin de la chaîne.