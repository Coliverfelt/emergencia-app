"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const paciente_entidade_1 = require("Entidades/paciente.entidade");
const lista_prioridade_atendimento_service_1 = require("./lista-prioridade-atendimento.service");
const lista_prioridade_atendimento_controller_1 = require("./lista-prioridade-atendimento.controller");
const lista_prioridade_atendimento_entidade_1 = require("Entidades/lista-prioridade-atendimento.entidade");
const classificacao_risco_entidade_1 = require("Entidades/classificacao-risco.entidade");
let ListaPrioridadeAtendimentoModule = class ListaPrioridadeAtendimentoModule {
};
ListaPrioridadeAtendimentoModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([paciente_entidade_1.Paciente, lista_prioridade_atendimento_entidade_1.ListaPrioridadeAtendimento, classificacao_risco_entidade_1.ClassificacaoRisco])],
        providers: [lista_prioridade_atendimento_service_1.ListaPrioridadeAtendimentoService],
        controllers: [lista_prioridade_atendimento_controller_1.ListaPrioridadeAtendimentoController],
        exports: [lista_prioridade_atendimento_service_1.ListaPrioridadeAtendimentoService]
    })
], ListaPrioridadeAtendimentoModule);
exports.ListaPrioridadeAtendimentoModule = ListaPrioridadeAtendimentoModule;
//# sourceMappingURL=lista-prioridade-atendimento.module.js.map