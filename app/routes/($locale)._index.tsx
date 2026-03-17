import { useState } from 'react';
import type { Route } from './+types/_index';
import logo from '~/assets/logo.png';

export const meta: Route.MetaFunction = () => {
  return [{ title: '440Hz | Intro' }];
};

export async function loader() {
  return null;
}

export default function Homepage() {
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password submitted:', password);
    // You can add password verification logic here
  };

  return (
    <div className="intro-container">
      <div className="content-box">
        <div className="logo-box">
          <img src={logo} alt="440Hz Logo" className="logo-img" />
        </div>

        <form onSubmit={handleSubmit} className="password-form">
          <input
            type="password"
            placeholder="ENTER PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="password-input"
          />
        </form>
      </div>

      <style>{`
        .intro-container {
          background-color: #000 !important;
          height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0;
          padding: 0;
          overflow: hidden;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 99999;
        }

        .content-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 60px;
        }

        .logo-box {
          animation: logoFadeIn 2.5s ease-in-out forwards;
        }

        .logo-img {
          width: 260px;
          max-width: 65vw;
          height: auto;
          filter: invert(1) brightness(10);
        }

        .password-form {
          opacity: 0;
          animation: formFadeIn 2s ease-in-out 1.2s forwards;
          width: 100%;
          max-width: 300px;
        }

        .password-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          padding: 15px 0;
          font-size: 13px;
          letter-spacing: 0.3rem;
          text-align: center;
          outline: none;
          transition: all 0.5s ease;
          font-family: inherit;
        }

        .password-input::placeholder {
          color: rgba(255, 255, 255, 0.15);
          letter-spacing: 0.3rem;
          font-size: 11px;
        }

        .password-input:focus {
          border-bottom: 1px solid rgba(255, 255, 255, 0.7);
          letter-spacing: 0.4rem;
        }

        @keyframes logoFadeIn {
          0% {
            opacity: 0;
            transform: scale(0.97);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes formFadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
