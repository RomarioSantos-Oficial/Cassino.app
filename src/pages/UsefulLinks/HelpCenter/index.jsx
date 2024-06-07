import React from 'react';
import styles from './HelpCenter.module.css';

function HelpCenter() {
    return (
        <div className={styles.helpCenter}>
            <h1>Help Center - Cassino Sorte em Perder</h1>
            <p>Bem-vindo ao Centro de Ajuda do Cassino Sorte em Perder. Estamos aqui para fornecer suporte e responder a quaisquer perguntas que você possa ter. Por favor, consulte as seções abaixo para obter mais informações.</p>

            <h2>FAQs</h2>
            <ul>
                <li>
                    <strong>Como faço para criar uma conta?</strong>
                    <p>Para criar uma conta, clique no botão "Registrar-se" no canto superior direito da página inicial e siga as instruções.</p>
                </li>
                <li>
                    <strong>Como faço um depósito?</strong>
                    <p>Vá para a seção de "Depósitos" no seu perfil, escolha o método de pagamento desejado e siga as instruções.</p>
                </li>
                <li>
                    <strong>Como retiro meus ganhos?</strong>
                    <p>Na seção "Saques" do seu perfil, selecione o método de retirada e siga as instruções fornecidas.</p>
                </li>
                <li>
                    <strong>Quais são as opções de pagamento disponíveis?</strong>
                    <p>Aceitamos vários métodos de pagamento, incluindo cartões de crédito, transferências bancárias e carteiras eletrônicas. Consulte nossa página de pagamentos para mais detalhes.</p>
                </li>
                <li>
                    <strong>É seguro jogar no Cassino Sorte em Perder?</strong>
                    <p>Sim, garantimos um ambiente de jogo seguro e justo. Usamos tecnologia de criptografia avançada para proteger seus dados.</p>
                </li>
            </ul>

            <h2>Contato</h2>
            <p>Se você não encontrar a resposta para sua pergunta, entre em contato conosco:</p>
            <ul>
                <li>Email: suporte@cassinosorteemperder.com</li>
                <li>Telefone: +55 11 1234-5678</li>
                <li>Chat ao vivo: disponível 24/7 no site</li>
            </ul>
        </div>
    );
}

export default HelpCenter;
