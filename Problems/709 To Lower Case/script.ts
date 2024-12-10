// Solved

function toLowerCase(s: string): string {
  const diff = "a".charCodeAt(0) - "A".charCodeAt(0);
  let str = "";

  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      str += String.fromCharCode(code + diff);
    } else {
      str += s[i];
    }
  }

  return str;
}

console.log(toLowerCase("Hello"));
