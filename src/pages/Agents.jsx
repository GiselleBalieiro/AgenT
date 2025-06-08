import react from "react";

const Agents = () => {
    return (
      <>
        <div className="flex flex-col items-start">
            <h1 className="text-3xl font-bold underline p-4 rounded-lg text-gray-700">
                Meus Agentes
            </h1>
            <p className="mt-4 text-lg text-gray-700">
                Gerencie todos os seus agentes de IA em um só lugar
            </p>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6 mt-4 text-lg text-gray-700">
          <div className="bg-[#FFFFFF] shadow-md rounded-lg p-4">
            <span>Todas de agentes</span>
            <p>3</p>
          </div>
          <div className="bg-[#FFFFFF] shadow-md rounded-lg p-4">
            <span>Agentes ativos</span>
            <p>1</p>
          </div>
          <div className="bg-[#FFFFFF] shadow-md rounded-lg p-4">
            <span>Conversas hoje</span>
            <p>2,535</p>
          </div>
          <div className="bg-[#FFFFFF] shadow-md rounded-lg p-4">
            <span >Em treinamento</span>
            <p>1</p>
          </div>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6 mt-4 text-lg text-gray-700">
          <div className="bg-[#FFFFFF] shadow-md rounded-lg p-4">
            <h2 className="text-2xl font-semibold text-gray-800 p-4">Atendimento Cliente</h2>
            <span>Ativo</span>
            <p>Agente especializado em atendimento ao cliente e suporte técnico</p>

            <ul className="pl-0 mt-4 text-gray-700 list-none">
              <li>Plataforma: WhatApp</li>
              <li>Conversas: 1247</li>
              <li>Último treino: 14/01/2025</li>
            </ul>

            <div className="flex justify-between mt-4">
              <button>Treinar IA</button>
              <button>Conectar</button>
            </div>

          </div>
          <div className="bg-[#FFFFFF] shadow-md rounded-lg p-4">
            <h2 className="text-2xl font-semibold text-gray-800 p-4">Vendas Bot</h2>
            <span>Treinando</span>
            <p>Agente focado em vendas e conversão de leads</p>

            <ul className="list-none pl-0 mt-4 text-gray-700 decoration-none">
              <li>Plataforma: WhatsApp + Telegram</li>
              <li>Conversas: 856</li>
              <li>Último treino: 09/01/2024</li>
            </ul>

            <div className="flex justify-between mt-4">
              <button>Treinar IA</button>
              <button>Conectar</button>
            </div>

          </div>
          <div className="bg-[#FFFFFF] shadow-md rounded-lg p-4">
            <h2 className="text-2xl font-semibold text-gray-800 p-4">FAQ Automático</h2>
            <span>Inativo</span>
            <p>Responde perguntas frequente automaticamente</p>

            <ul className="list-none pl-0 mt-4 text-gray-700 decoration-none">
              <li>Plataforma: Telegram</li>
              <li>Conversas: 432</li>
              <li>Último treino: 04/01/2024</li>
            </ul>

            <div className="flex justify-between mt-4">
              <button>Treinar IA</button>
              <button>Conectar</button>
            </div>

          </div>
          <div className="bg-[#FFFFFF] shadow-md rounded-lg p-4">
            <h2 className="text-2xl font-semibold text-gray-800 p-4">Criar Novo Agente</h2>
            <p>Configure um novo agente de IA personalizado para suas necessidades</p>
            <button>Começar Agora</button>
          </div>
        </div>
      </>
        );
}

export default Agents;