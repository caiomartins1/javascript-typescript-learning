import app from './app';

const port = 3000;
app.listen(port, () => {
  console.log(`\nLinstening on port: ${port}`);
  console.log(`CMD + Click http://localhost:${port}`);
});
