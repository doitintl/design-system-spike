import DDragdrop from './ui/components/patterns/DDragdrop/DDragdrop';
//import DButton from './ui/components/elements/DButton/DButton';

function App() {
  return (
    <main className="App">

      {/*
        <DTitle />
        <DTitle.H1 />
        <DTitle.H2 />
        <DTitle.H3 />
        <DTitle.H4 />
        <DTitle.H5 />
        <DTitle.H6 />

        <DText />
        <DText.Sm />
        <DText.Lg />

        <DButton.Primary>DButton</DButton.Primary>
        <DButton.Secondary>DButton</DButton.Secondary>
        <DButton.Tertiary>DButton</DButton.Tertiary>
      */}




      <DDragdrop.Area legend="Meets ANY of the following conditions">
        <DDragdrop.Item><strong>lorem</strong> ipsum <strong>sit</strong> amet <strong>cons</strong> ctetur</DDragdrop.Item>
        <DDragdrop.Operator value="or" />
        <DDragdrop.Item><strong>lorem</strong> ipsum <strong>sit</strong> amet <strong>cons</strong> ctetur</DDragdrop.Item>
        <DDragdrop.Operator value="or" />
        <DDragdrop.Item><strong>lorem</strong> ipsum <strong>sit</strong> amet <strong>cons</strong> ctetur</DDragdrop.Item>

        <DDragdrop.Group legend="Meets ALL of the following conditions">
          <DDragdrop.Item><strong>lorem</strong> ipsum <strong>sit</strong> amet <strong>cons</strong> ctetur</DDragdrop.Item>
          <DDragdrop.Operator value="and" />
          <DDragdrop.Item><strong>lorem</strong> ipsum <strong>sit</strong> amet <strong>cons</strong> ctetur</DDragdrop.Item>
          <DDragdrop.Field placeholder="Add condition" />
        </DDragdrop.Group>

        <DDragdrop.Field placeholder="Add condition" />
      </DDragdrop.Area>


    </main>
  );
}

export default App;
