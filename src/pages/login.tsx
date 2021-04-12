import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Login = () => (
  <Main meta={<Meta title="Sign In" description="Loga aqui nessa bosta" />}>
    <div className="bg-gray-200">
      <div className="flex flex-wrap w-10/12 h-full min-h-screen justify-between items-center container mx-auto">
        <div className="flex-shrink w-12/12 lg:w-6/12 md:w-4/12">
          <div>
            <h1 className="text-6xl text-gray-800 font-bold">Lorem ipsum.</h1>
            <p className="text-gray-800 text-opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, qui.
            </p>
          </div>

          <img
            src="https://842930.smushcdn.com/1760858/wp-content/uploads/2020/06/sunshine-15-sign-in.png?lossy=1&strip=1&webp=1"
            alt="login"
            style={{ mixBlendMode: 'multiply' }}
            className="lg:mt-24 md:mt-24"
          />
        </div>
        <div className="bg-white p-8 rounded-lg shadow w-12/12 lg:w-4/12 md:w-6/12">
          <div>
            <h3 className="text-2xl text-gray-800 font-bold">Bem-vindo de volta</h3>
            <p className="text-opacity-70 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, sunt.
            </p>
          </div>
          <form className="mt-12">
            <div>
              <input
                className="bg-gray-300 rounded-md h-14 w-full placeholder-gray-600 pl-4 outline-none focus:bg-gray-400 transition-colors"
                placeholder="E-mail"
                type="mail"
              />
            </div>

            <div className="mt-4">
              <input
                className="bg-gray-300 rounded-md h-14 w-full placeholder-gray-600 pl-4 outline-none focus:bg-gray-400 transition-colors"
                placeholder="Senha"
                type="password"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full h-14 bg-yellow-400 rounded-lg text-white font-bold text-lg focus:outline-none mt-6 hover:bg-yellow-500 focus:bg-yellow-600 transition-colors"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Main>
);

export default Login;
