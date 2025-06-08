
import { Bot, Circle, MessageCircle, Zap } from "lucide-react";

const Agents = () => {
    return (
     <> 
      <nav className="w-full fixed px-5 lg:px-8  py-4 flex items-center justify-between z-50 backdrop-blur-lg bg-gradient-to-b  transition-colors duration-300 border-b-1 border-[#E5E7EB]">
        <h2 className="flex text-[18px] font-bold rounded-lg text-[#111827] "><Bot className="w-6 h-6 text-blue-600 mr-2" /> AgenT</h2>
        <div className="flex items-center gap-4">
          <button className="bg-[#FFFFFF] border-[0.5px] border-[#E5E7EB] text-[#111827] px-4 py-2 rounded-lg transition-colors duration-300 cursor-pointer">
           Conectar Conta
          </button>
          <button className="bg-[#3B82F6] text-[white] px-4 py-2 rounded-lg cursor-pointer">
            Novo Agente
          </button>
        </div>
      </nav>
        <div className="flex flex-col items-start pt-30 pl-[36px]">
            <h1 className="text-[18px] font-bold rounded-lg text-[#111827]">
                Meus Agentes
            </h1>
            <p className="text-lg mt-2.5 text-[#6B7280]">
                Gerencie todos os seus agentes de IA em um só lugar
            </p>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6 pl-[36px] text-lg">
        <div className="bg-[#FFFFFF] border-[0.5px] border-[#E5E7EB] rounded-xl p-6">
          <span className=" text-[#6B7280] text-[14px]">Total de agentes</span>
          <div className="flex justify-between items-center">
            <p className="text-[#111827] font-bold rounded-lg text-[28px] mb-0">3</p>
            <Bot className="w-6 h-6 text-blue-600 ml-2" />
          </div>
        </div>
          <div className="bg-[#FFFFFF] border-[0.5px] border-[#E5E7EB] rounded-xl p-6">
            <span className=" text-[#6B7280] text-[14px]">Agentes ativos</span>
            <div className="flex justify-between items-center">
            <p className="text-[#111827] font-bold rounded-lg text-[28px]">1</p>
            <Circle className="w-4 h-4 text-green-500 fill-green-500" />
            </div>
          </div>
          <div className="bg-[#FFFFFF] border-[0.5px] border-[#E5E7EB] rounded-xl p-6">
            <span className=" text-[#6B7280] text-[14px]">Conversas hoje</span>
            <div className="flex justify-between items-center">
            <p className="text-[#111827] font-bold rounded-lg text-[28px]">2,535</p>
            <MessageCircle className="w-5 h-5 text-blue-500" />
            </div>
          </div>
          <div className="bg-[#FFFFFF] border-[0.5px] border-[#E5E7EB] rounded-xl p-6">
            <span className=" text-[#6B7280] text-[14px]">Em treinamento</span>
            <div className="flex justify-between items-center">
            <p className="text-[#111827] font-bold rounded-lg text-[28px]">1</p>
            <Zap className="w-5 h-5 text-yellow-500" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 mt-4 text-lg text-gray-700">
          <div className="bg-[#FFFFFF] border-[0.5px] border-[#E5E7EB] rounded-xl pl-6 pr-6 pt-2 pb-6">
            <div className="flex">
              <div className="bg-blue-50 p-2 mt-8 mb-8 h-10 rounded-[10px]">
                <Bot className="w-6 h-6 text-blue-600" /> 
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold rounded-lg text-[#111827]">Atendimento Cliente</h2>
                <span className="bg-green-100 border-green-100 rounded-xl pr-3 pl-3 text-[12px] ">Ativo</span>
              </div>
            </div>
            <p className="text-[#6B7280] text-[16px]">Agente especializado em atendimento ao cliente e suporte técnico</p>

            <ul className="pl-0 mt-4 list-none text-[#6B7280] text-[16px] ">
              <li className="flex justify-between items-center">
                <span>Plataforma:</span>
                <span className="bg-gray-300 border-green-100 text-black text-[14px] rounded-xl pr-3 pl-3">WhatApp</span>
              </li>
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