
import { Bot, Circle, MessageCircle, Plus, Zap } from "lucide-react";

const Agents = () => {
    return (
     <> 
      <nav className="w-full fixed px-5 lg:px-8  py-4 flex items-center justify-between z-50 backdrop-blur-lg bg-gradient-to-b  transition-colors duration-300 border-b-1 border-[#E5E7EB]">
        <h2 className="flex text-[18px] font-bold rounded-lg text-[#111827] "><Bot className="w-6 h-6 text-blue-600 mr-2" /> AgenT</h2>
        <div className="flex items-center gap-4">
          <button className="bg-[#FFFFFF] border-[0.5px] border-[#E5E7EB] text-[#111827] px-4 py-2 rounded-lg transition-colors duration-300 cursor-pointer flex gap-3">
            <MessageCircle className="w-4 h-4 text-[#111827] mt-1" /> Conectar Conta
          </button>
          <button className="bg-[#3B82F6] text-[white] px-4 py-2 rounded-lg cursor-pointer flex gap-3">
            <Plus className="w-5 h-5 text-[white] mt-0.5" /> Novo Agente
          </button>
        </div>
      </nav>
      <div className="pb-[36px]">
        <div className="flex flex-col items-start pt-26 pl-[36px] pb-2">
            <h2 className="text-[30px] font-bold rounded-lg text-[#111827]">
                Meus Agentes
            </h2>
            <p className="text-[16px] mt-2.5 text-[#6B7280]">
                Gerencie todos os seus agentes de IA em um só lugar
            </p>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-4 pl-[36px] pr-[36px] text-lg mt-3.5 mb-8">
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
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4 pl-[36px] pr-[36px] text-lg text-gray-700 mt-2">
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
              <li className="flex justify-between items-center mb-1">
                <span>Plataforma:</span>
                <span className="bg-gray-300 border-green-100 text-black text-[14px] rounded-xl pr-3 pl-3">WhatApp</span>
              </li>
              <li className="flex justify-between items-center mb-1">
                <span>Conversas:</span>
                <span className="text-black text-[14px] rounded-xl pr-3 pl-3">856</span>
              </li>
              <li className="flex justify-between items-center mb-1">
                <span>Último Treino:</span>
                <span className=" text-black text-[14px] rounded-xl pr-3 pl-3">09/01/2024</span>
              </li>
            </ul>

            <div className="flex justify-center mt-4 gap-4">
              <button className="bg-[#FFFFFF] border-[0.5px] border-[#E5E7EB] text-[#111827] w-[100%] rounded-lg transition-colors duration-300 cursor-pointer p-2 flex justify-center gap-4">
                <Zap className="w-5 h-5 text-yellow-500 mt-0.5" /> Treinar IA
              </button>
              <button className="bg-[#FFFFFF] border-[0.5px] border-[#E5E7EB] text-[#111827] w-[100%] rounded-lg transition-colors duration-300 cursor-pointer p-2 flex justify-center gap-4">
                 <MessageCircle className="w-5 h-5 text-blue-500 mt-0.5" /> Conectar Conta
              </button>
            </div>

          </div>
          <div className="bg-[#FFFFFF] border-[0.5px] border-[#E5E7EB] rounded-xl pl-6 pr-6 pt-2 pb-6">
            <div className="flex">
              <div className="bg-blue-50 p-2 mt-8 mb-8 h-10 rounded-[10px]">
                <Bot className="w-6 h-6 text-blue-600" /> 
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold rounded-lg text-[#111827]">Atendimento Cliente</h2>
                <span className="bg-yellow-100 border-green-100 rounded-xl pr-3 pl-3 text-[12px] ">Treinando</span>
              </div>
            </div>
            <p className="text-[#6B7280] text-[16px]">Agente especializado em atendimento ao cliente e suporte técnico</p>

            <ul className="pl-0 mt-4 list-none text-[#6B7280] text-[16px] ">
              <li className="flex justify-between items-center mb-1">
                <span>Plataforma:</span>
                <span className="bg-gray-300 border-green-100 text-black text-[14px] rounded-xl pr-3 pl-3">WhatApp + Telegram</span>
              </li>
              <li className="flex justify-between items-center mb-1">
                <span>Conversas:</span>
                <span className="text-black text-[14px] rounded-xl pr-3 pl-3">856</span>
              </li>
              <li className="flex justify-between items-center mb-1">
                <span>Último Treino:</span>
                <span className=" text-black text-[14px] rounded-xl pr-3 pl-3">09/01/2024</span>
              </li>
            </ul>

            <div className="flex justify-center mt-4 gap-4">
              <button className="bg-[#FFFFFF] border-[0.5px] border-[#E5E7EB] text-[#111827] w-[100%] rounded-lg transition-colors duration-300 cursor-pointer p-2 flex justify-center gap-4">
                <Zap className="w-5 h-5 text-yellow-500 mt-0.5" /> Treinar IA
              </button>
              <button className="bg-[#FFFFFF] border-[0.5px] border-[#E5E7EB] text-[#111827] w-[100%] rounded-lg transition-colors duration-300 cursor-pointer p-2 flex justify-center gap-4">
                 <MessageCircle className="w-5 h-5 text-blue-500 mt-0.5" /> Conectar Conta
              </button>
            </div>

          </div>
          <div className="bg-[#FFFFFF] border-[0.5px] border-[#E5E7EB] rounded-xl pl-6 pr-6 pt-2 pb-6">
            <div className="flex">
              <div className="bg-blue-50 p-2 mt-8 mb-8 h-10 rounded-[10px]">
                <Bot className="w-6 h-6 text-blue-600" /> 
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold rounded-lg text-[#111827]">FAQ Automático</h2>
                <span className="bg-gray-300 border-gray-300 rounded-xl pr-3 pl-3 text-[12px] ">Inativo</span>
              </div>
            </div>
            <p className="text-[#6B7280] text-[16px]">Agente especializado em atendimento ao cliente e suporte técnico</p>

            <ul className="pl-0 mt-4 list-none text-[#6B7280] text-[16px] ">
              <li className="flex justify-between items-center mb-1">
                <span>Plataforma:</span>
                <span className="bg-gray-300 border-gray-300 text-black text-[14px] rounded-xl pr-3 pl-3">Telegram</span>
              </li>
              <li className="flex justify-between items-center mb-1">
                <span>Conversas:</span>
                <span className="text-black text-[14px] rounded-xl pr-3 pl-3">856</span>
              </li>
              <li className="flex justify-between items-center mb-1">
                <span>Último Treino:</span>
                <span className=" text-black text-[14px] rounded-xl pr-3 pl-3">09/01/2024</span>
              </li>
            </ul>

            <div className="flex justify-center mt-4 gap-4">
              <button className="bg-[#FFFFFF] border-[0.5px] border-[#E5E7EB] text-[#111827] w-[100%] rounded-lg transition-colors duration-300 cursor-pointer p-2 flex justify-center gap-4">
                <Zap className="w-5 h-5 text-yellow-500 mt-0.5" /> Treinar IA
              </button>
              <button className="bg-[#FFFFFF] border-[0.5px] border-[#E5E7EB] text-[#111827] w-[100%] rounded-lg transition-colors duration-300 cursor-pointer p-2 flex justify-center gap-4">
                 <MessageCircle className="w-5 h-5 text-blue-500 mt-0.5" /> Conectar Conta
              </button>
            </div>

          </div>
          <div className="bg-[#FFFFFF] border-[2px] border-dashed border-[#E5E7EB] rounded-xl pl-6 pr-6 pt-2 pb-6 flex justify-center items-center text-center flex-col">
            <div className="bg-blue-50 p-2 mt-8 h-9 rounded-[20px]"> 
              <Plus className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-[#111827] p-4">Criar Novo Agente</h2>
            <p className="text-[#6B7280] px-4 text-center text-[16px]">Configure um novo agente de IA personalizado para suas necessidades</p>
            <button className="bg-[#3B82F6] text-[white] px-4 py-2 mt-4 rounded-lg cursor-pointer">
            Começar agora
          </button>
          </div>
        </div>
      </div>
    </>
        );
}

export default Agents;