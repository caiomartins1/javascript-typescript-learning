const clientData: [number, string] = [1, 'Caio'];
const clientData2: readonly [number, string] = [1, 'Caio'];
const clientData3: [number, string, ...string[]] = [1, 'Caio', 'oi'];

clientData[0] = 100;
// clientData[0] = 's'; -> not allowed because index 0 is typed number
