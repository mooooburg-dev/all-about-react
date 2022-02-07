import { RecoilRoot } from 'recoil';
import FontButton from './components/RecoilExample/FontButton';
import Text from './components/RecoilExample/Text';
// import MobxExample from './components/MobxExample';
// import Counter from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <MobxExample /> */}

      <RecoilRoot>
        <FontButton />
        <Text />
      </RecoilRoot>
    </div>
  );
}

export default App;
