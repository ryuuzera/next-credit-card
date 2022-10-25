import { Slider } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Title from 'react-vanilla-tilt';
import styles from './Home.module.css';

const physalis = '/physalis.svg';
const chipImage = '/chip.png';
const hokusai = '/hokusai.webp';
const neonbg = '/neon-bg.jpg';

const Homepage = () => {
  const [color, setColor] = useState('#000000');
  const [rgbaColor, setRgbaColor] = useState('rgba(0,0,0,1)');
  const [opacity, setOpacity] = useState(1);
  const [numbers, setNumbers] = useState([]);
  const [ownerName, setOwnerName] = useState('JOHN DOE');
  const [orbBright, setOrbBright] = useState(0.2);

  const gerarNumeros = () => {
    const numbers = new Array();
    for (let i = 0; i < 4; i++) {
      numbers.push(String(Math.floor(1000 + Math.random() * 9000)).substring(0, 4));
    }
    setNumbers(numbers);
  };
  useEffect(() => {
    gerarNumeros();
  }, []);

  useEffect(() => {
    setRgbaColor(
      'rgba(' +
        parseInt(color.slice(-6, -4), 16) +
        ',' +
        parseInt(color.slice(-4, -2), 16) +
        ',' +
        parseInt(color.slice(-2), 16) +
        ',' +
        opacity +
        ')'
    );
  }, [color, opacity]);

  return (
    <>
      <div className='Container'>
        <div className={styles.Blur}></div>
        <div className={styles.ContainerCenter}>
          <div className='orb'></div>
          <div className={styles.CardLeft}>
              <div className={styles.colorContainer}>
                <label className={styles.labelColor}>Selecione a Cor:</label>
                <input
                  className='colorPicker'
                  type='color'
                  defaultValue='#000'
                  value={color}
                  onChange={(e) => {
                    setColor(e.target.value);
                  }}
                />
                <label className={styles.labelAlpha}>Transparencia:</label>
                <Slider
                  sx={{ width: '355px' }}
                  min={0}
                  max={100}
                  defaultValue={100}
                  onChange={(e) => {
                    setOpacity(e.target.value / 100);
                  }}
                />{' '}
              </div>
              <div className={styles.ownerName}>
                <h1>Nome do Proprietário</h1>
                <input
                  type='text'
                  className={styles.ownerNameInput}
                  onChange={(e) => {
                    e.target.value = e.target.value.toUpperCase();
                    e.target.value === '' ? setOwnerName('‎') : setOwnerName(e.target.value);
                  }}
                />
              </div>
              <div className={styles.numberGenerator}>
                <button onClick={() => gerarNumeros()}>Gerar Números</button>
              </div>
          </div>
          <div className={styles.CardRight}>
            <div className={styles.CardTitle}>
              <h1>Personalize seu Suizei Card</h1>
            </div>
            <div className={styles.CardPreview}>
              <Title
                style={{
                  heigth: '370px',
                  width: '600px',
                  minHeigth: '370px',
                  minWidth: '600px',
                  borderRadius: '18px',
                }}
                className={styles.tilt}
                options={{ speed: 10, max: 15, glare: false }}>
                <div
                  className='creditCard'
                  onMouseEnter={() => setOrbBright(0.9)}
                  onMouseLeave={() => setOrbBright(0.2)}>
                  <div className={styles.cardTop}>
                    <div className={styles.bankName}>
                      <h1>Suizei Bank </h1>
                    </div>
                    <div className={styles.bankLogo}>
                      <Image width='60' height='60' src={physalis} alt='logo' className={styles.pngLogo} />
                    </div>
                  </div>

                  <div className={styles.cardInfo}>
                    <div className={styles.iconNFC}>
                      <div className={styles.chipImage}>
                        <Image src={chipImage} height='74px' width='74px' alt='chip' />
                      </div>
                      <svg viewBox='0 3.71 26.959 38.787' width='26.959' height='38.787' fill='white'>
                        <path d='M19.709 3.719c.266.043.5.187.656.406 4.125 5.207 6.594 11.781 6.594 18.938 0 7.156-2.469 13.73-6.594 18.937-.195.336-.57.531-.957.492a.9946.9946 0 0 1-.851-.66c-.129-.367-.035-.777.246-1.051 3.855-4.867 6.156-11.023 6.156-17.718 0-6.696-2.301-12.852-6.156-17.719-.262-.317-.301-.762-.102-1.121.204-.36.602-.559 1.008-.504z'></path>
                        <path d='M13.74 7.563c.231.039.442.164.594.343 3.508 4.059 5.625 9.371 5.625 15.157 0 5.785-2.113 11.097-5.625 15.156-.363.422-1 .472-1.422.109-.422-.363-.472-1-.109-1.422 3.211-3.711 5.156-8.551 5.156-13.843 0-5.293-1.949-10.133-5.156-13.844-.27-.309-.324-.75-.141-1.114.188-.367.578-.582.985-.542h.093z'></path>
                        <path d='M7.584 11.438c.227.031.438.144.594.312 2.953 2.863 4.781 6.875 4.781 11.313 0 4.433-1.828 8.449-4.781 11.312-.398.387-1.035.383-1.422-.016-.387-.398-.383-1.035.016-1.421 2.582-2.504 4.187-5.993 4.187-9.875 0-3.883-1.605-7.372-4.187-9.875-.321-.282-.426-.739-.266-1.133.164-.395.559-.641.984-.617h.094zM1.178 15.531c.121.02.238.063.344.125 2.633 1.414 4.437 4.215 4.437 7.407 0 3.195-1.797 5.996-4.437 7.406-.492.258-1.102.07-1.36-.422-.257-.492-.07-1.102.422-1.359 2.012-1.075 3.375-3.176 3.375-5.625 0-2.446-1.371-4.551-3.375-5.625-.441-.204-.676-.692-.551-1.165.122-.468.567-.785 1.051-.742h.094z'></path>
                      </svg>
                    </div>
                    <div className={styles.cardNumber}>
                      <div className={styles.numberLabel}>{numbers[0]}</div>
                      <div className={styles.numberLabel}>{numbers[1]}</div>
                      <div className={styles.numberLabel}>{numbers[2]}</div>
                      <div className={styles.numberLabel}>{numbers[3]}</div>
                    </div>
                    <div className={styles.cardOwnerName}>
                      <h1>{ownerName}</h1>
                    </div>
                    <div className={styles.masterLogo}>
                      <div className={styles.circleOne}></div>
                      <div className={styles.circleTwo}></div>
                      <h1>mastercard</h1>
                    </div>
                  </div>
                </div>
              </Title>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .Container {
            background: url(${neonbg});
            background-repeat: no-repeat;
            background-size: cover;
            height: 100vh;
            width: 100vw;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            z-index: 0;
            border: none;
            position: absolute;
          }

          @keyframes float {
            0% {
              box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
              transform: translatey(0px);
            }
            50% {
              box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
              transform: translatey(-20px);
            }
            100% {
              box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
              transform: translatey(0px);
            }
          }

          @keyframes orbit {
            from {
              transform: rotate(0deg) translateX(100px) rotate(0deg);
            }
            to {
              transform: rotate(360deg) translateX(100px) rotate(-360deg);
            }
          }

          .creditCard {
            background: ${rgbaColor};
            cursor: pointer;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            min-height: 370px;
            min-width: 600px;
            height: 370px;
            width: 600px;
            border-radius: 18px;
            border-top: 1px solid rgba(125, 125, 125, 1);
            border-right: 1px solid rgba(125, 125, 125, 1);
            transform: translatey(0px);
            animation: float 6s ease-in-out infinite;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(18px);
            -webkit-backdrop-filter: blur(18px);
          }
          .creditCard:before {
            content: '';
            border-radius: 18px;
            background: hsla(213, 77%, 14%, 0.4);
            background: linear-gradient(90deg, hsla(213, 77%, 14%, 0.4) 0%, hsla(202, 27%, 45%, 0.4) 100%);
            background: -moz-linear-gradient(90deg, hsla(213, 77%, 14%, 0.4) 0%, hsla(202, 27%, 45%, 0.4) 100%);
            background: -webkit-linear-gradient(90deg, hsla(213, 77%, 14%, 0.4) 0%, hsla(202, 27%, 45%, 0.4) 100%);
            position: absolute;
            min-height: 370px;
            min-width: 600px;
            height: 370px;
            width: 600px;
          }

          .orb:before,
          .orb:after {
            border-radius: 50%;
            box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
            content: '';
            position: fixed;
            width: 150px;
            height: 150px;
            border-radius: 50%;
            opacity: ${orbBright};
            transition: all 1s;
            animation: float 20s linear infinite;
          }
          .orb:before {
            background: #ffe897;
            background: -moz-radial-gradient(top right, #ffe897, #f98a05);
            background: radial-gradient(to bottom left, #ffe897, #f98a05);
            background: -webkit-radial-gradient(top right, #ffe897, #f98a05);
            left: 80%;
            top: 60%;
          }
          .orb:after {
            animation-delay: 2.5s;
            background: #e0e793;
            background: -moz-radial-gradient(bottom right, #e0e793, #6dd0f1);
            background: radial-gradient(to top left, #e0e793, #6dd0f1);
            background: -webkit-radial-gradient(bottom right, #e0e793, #6dd0f1);
            left: 44%;
            top: 25%;
          }
          .colorPicker {
            -webkit-appearance: none;
            box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
            cursor: pointer;
            border: none;
            width: 200px;
            margin: 0 0 20px 0;
          }
          .colorPicker::-webkit-color-swatch-wrapper {
            padding: 2px;
          }
          .colorPicker::-webkit-color-swatch {
          }
        `}
      </style>
    </>
  );
};

export default Homepage;
