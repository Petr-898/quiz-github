import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'Что такое гик?',
    variants: ['флагшток', 'элемент лука', 'палка для управления парусом'],
    correct: 2,
  },
  {
    title: 'Виндсерфинг это...',
    variants: [
      'элемент фигурного катания',
      'управление парусом, стоя на доске',
      'катание с заснеженных слонов и гор',
    ],
    correct: 1,
  },
  {
    title: 'Фордевинд это...',
    variants: [
      'вид поворота в парусном спорте',
      'матерное слово ',
      'безопасный проход по водному пространству',
    ],
    correct: 0,
  },
  {
    title: 'Кто такой крутой виндсерфер?',
    variants: [
      'человек, знающий абсолютно всё про виндсерфинг',
      'человек с крутыми плечами',
      'человек, исполняющий сложные элементы в виндсерфинге',
    ],
    correct: 2,
  },
  {
    title: 'Бичстарт это... ?',
    variants: [
      'старт с мелкой воды, держа парус в руках',
      'начало движения с общественного пляжа',
      'движение, лёжа на доске',
    ],
    correct: 0,
  },
  {
    title: 'Передоз это...?',
    variants: [
      'излишек взятого "на грудь" ',
      'чрезмерная усталось после каталки',
      'слишком сильный ветер для данного паруса',
    ],
    correct: 2,
  },
  {
    title: 'Привестись это?',
    variants: [
      'приехать в пункт назначения',
      'повернуть носом к ветру',
      'повернуть носом от ветра',
    ],
    correct: 1,
  },
  {
    title: 'Увалиться это?',
    variants: [
      'упасть с доски',
      'повернуть носом от ветра',
      'ехать кормой вперед',
    ],
    correct: 1,
  },
  {
    title: 'Правый галс это...?',
    variants: [
      'движение от точки старта вправо',
      'правая рука ближе к мачте',
      'правая нога в задней петле',
    ],
    correct: 1,
  },
  
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
       <h2>Вы отгадали {correct} ответ(-а; -ов) из {questions.length} </h2>
      <a href='/' className='button'>
      Попробовать снова
      </a>
      {/* <a href='/'>
        <button>Пробывать снова</button>
      </a> */}
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const persentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${persentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>
            {text}
          </li>
        ))}
        {/* <li></li> */}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
