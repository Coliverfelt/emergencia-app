"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const paciente_entidade_1 = require("Entidades/paciente.entidade");
const typeorm_2 = require("typeorm");
const lista_prioridade_atendimento_entidade_1 = require("Entidades/lista-prioridade-atendimento.entidade");
let PacienteService = class PacienteService {
    constructor(pacienteRepositorio, listaPrioridadeAtendimentoRepositorio) {
        this.pacienteRepositorio = pacienteRepositorio;
        this.listaPrioridadeAtendimentoRepositorio = listaPrioridadeAtendimentoRepositorio;
    }
    acharTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.pacienteRepositorio.find();
        });
    }
    inserir(paciente) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.pacienteRepositorio.createQueryBuilder()
                .insert()
                .into(paciente_entidade_1.Paciente)
                .values([
                { nome: paciente.nome,
                    data_nasc: paciente.data_nasc,
                    hospital: paciente.hospital,
                    documentacao: paciente.documentacao,
                    sexo: paciente.sexo,
                }
            ])
                .execute();
        });
    }
    atualizarClassificacao(classificacaoRisco) {
        return __awaiter(this, void 0, void 0, function* () {
            let prioridade = 0;
            const ultimoId = yield this.pacienteRepositorio.createQueryBuilder('paciente')
                .getCount();
            const pacienteForeign = yield this.pacienteRepositorio.createQueryBuilder('paciente')
                .where('paciente.idPaciente = :id', { id: ultimoId })
                .getOne();
            classificacaoRisco.forEach(element => {
                if (element.marcado === 1) {
                    prioridade += element.peso;
                }
            });
            if (prioridade <= 1) {
                this.atualizaPrioridade(1, pacienteForeign.idPaciente);
            }
            else if (prioridade == 2) {
                this.atualizaPrioridade(2, pacienteForeign.idPaciente);
            }
            else if (prioridade == 3) {
                this.atualizaPrioridade(3, pacienteForeign.idPaciente);
            }
            else if (prioridade >= 4) {
                this.atualizaPrioridade(4, pacienteForeign.idPaciente);
            }
        });
    }
    atualizaPrioridade(idPrioridade, idPac) {
        return __awaiter(this, void 0, void 0, function* () {
            const prioridade = yield this.listaPrioridadeAtendimentoRepositorio.findByIds([idPrioridade]);
            yield this.pacienteRepositorio.createQueryBuilder()
                .update(paciente_entidade_1.Paciente)
                .set({ prioridade: prioridade[0].prioridade, mensagem: prioridade[0].mensagem })
                .where("idPaciente = :id", { id: idPac })
                .execute();
        });
    }
};
PacienteService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(paciente_entidade_1.Paciente)),
    __param(1, typeorm_1.InjectRepository(lista_prioridade_atendimento_entidade_1.ListaPrioridadeAtendimento)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PacienteService);
exports.PacienteService = PacienteService;
//# sourceMappingURL=paciente.service.js.map