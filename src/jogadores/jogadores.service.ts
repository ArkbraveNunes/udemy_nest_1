import { Injectable, Logger } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { uuid } from 'uuidv4'

@Injectable()
export class JogadoresService {
    
    private jogadores: Jogador[] = []
    private readonly logger = new Logger(JogadoresService.name)

    async criarAtualizarJogador(criaJogadorDto: CriarJogadorDto): Promise<void> {
        this.logger.log(`criaJogadorDto: ${criaJogadorDto}`)
        await this.criar(criaJogadorDto)
        
    }

    private criar(criaJogadorDto: CriarJogadorDto): void {
        const { nome, telefoneCelular, email } = criaJogadorDto

        const jogador: Jogador = {
            _id: uuid(),
            nome,
            telefoneCelular,
            email,
            ranking: 'A',
            posicaoRanking: 1,
            urlFotoJogador: 'www.teste.com.br/img.png'
        }
        this.logger.log(`criaJogadorDto: ${JSON.stringify(jogador)}`)
        this.jogadores.push(jogador);
    }
}