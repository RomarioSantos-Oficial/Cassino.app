import React from 'react';
import styles from './PaymentMethods.module.css';

function PaymentMethods() {
    return (
        <div className={styles.paymentMethods}>
            <h1>Meios de Pagamentos - Cassino Sorte em Perder</h1>
            <p>Última atualização: 20/mar/2024</p>

            <h2>1. Métodos Disponíveis</h2>
            <p>No Cassino Sorte em Perder, oferecemos uma variedade de métodos de pagamento para sua conveniência. Estes incluem:</p>
            <ul>
                <li>Cartões de Crédito/Débito (Visa, MasterCard, etc.)</li>
                <li>Carteiras Digitais (PayPal, Skrill, Neteller, etc.)</li>
                <li>Transferências Bancárias</li>
                <li>Criptomoedas (Bitcoin, Ethereum, etc.)</li>
            </ul>

            <h2>2. Depósitos</h2>
            <p>Os depósitos em sua conta do cassino são processados de forma rápida e segura. Siga as instruções na seção de depósitos para escolher seu método preferido e completar a transação. A maioria dos depósitos é creditada instantaneamente.</p>

            <h2>3. Saques</h2>
            <p>Os saques de sua conta também são processados de maneira segura. Dependendo do método escolhido, os tempos de processamento podem variar:</p>
            <ul>
                <li>Cartões de Crédito/Débito: 2-5 dias úteis</li>
                <li>Carteiras Digitais: Até 24 horas</li>
                <li>Transferências Bancárias: 3-7 dias úteis</li>
                <li>Criptomoedas: Até 24 horas</li>
            </ul>
            <p>Por favor, note que pode haver um período adicional de verificação para processar sua solicitação de saque.</p>

            <h2>4. Taxas</h2>
            <p>O Cassino Sorte em Perder não cobra taxas adicionais para depósitos ou saques. No entanto, alguns provedores de pagamento podem aplicar suas próprias taxas. Recomendamos verificar com seu provedor de pagamento para obter detalhes sobre quaisquer taxas aplicáveis.</p>

            <h2>5. Segurança</h2>
            <p>Levamos a segurança financeira muito a sério. Todas as transações são protegidas por criptografia avançada para garantir que suas informações pessoais e financeiras estejam seguras.</p>

            <h2>6. Suporte ao Cliente</h2>
            <p>Se você tiver qualquer dúvida ou enfrentar problemas com depósitos ou saques, nossa equipe de suporte ao cliente está disponível 24/7 para ajudar. Entre em contato conosco através de [e-mail de suporte] ou [número de telefone de suporte].</p>
        </div>
    );
}

export default PaymentMethods;
