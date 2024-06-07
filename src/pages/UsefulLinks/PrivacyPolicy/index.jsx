import React from 'react';
import styles from './PrivacyPolicy.module.css';

function PrivacyPolicy() {
    return (
        <div className={styles.privacyPolicy}>
            <h1>Políticas de Privacidade - Cassino Sorte em Perder</h1>
            <p><strong>Última atualização: 20/mar/2024</strong></p>

            <p>Bem-vindo ao Cassino Sorte em Perder. A sua privacidade é importante para nós. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações pessoais quando você utiliza nosso site.</p>

            <h2>1. Informações que Coletamos</h2>
            <p>Coletamos vários tipos de informações para fornecer e melhorar nossos serviços para você:</p>
            <ul>
                <li><strong>Informações Pessoais:</strong> Nome, endereço de e-mail, número de telefone, data de nascimento, endereço.</li>
                <li><strong>Informações de Pagamento:</strong> Detalhes do cartão de crédito/débito, informações de carteira digital, histórico de transações.</li>
                <li><strong>Informações Técnicas:</strong> Endereço IP, tipo de navegador, páginas visitadas, tempo gasto no site.</li>
            </ul>

            <h2>2. Uso das Informações</h2>
            <p>Usamos as informações coletadas para:</p>
            <ul>
                <li>Fornecer e manter nossos serviços.</li>
                <li>Processar transações e gerenciar sua conta.</li>
                <li>Melhorar a experiência do usuário.</li>
                <li>Enviar comunicações promocionais e atualizações.</li>
                <li>Garantir a segurança e a integridade do site.</li>
            </ul>

            <h2>3. Compartilhamento de Informações</h2>
            <p>Não vendemos, trocamos ou alugamos suas informações pessoais para terceiros. Podemos compartilhar suas informações com:</p>
            <ul>
                <li>Provedores de serviços que nos ajudam a operar nosso site e fornecer nossos serviços.</li>
                <li>Autoridades legais quando exigido por lei ou para proteger nossos direitos.</li>
                <li>Parceiros de negócios com seu consentimento explícito.</li>
            </ul>

            <h2>4. Proteção das Informações</h2>
            <p>Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhuma transmissão pela Internet é totalmente segura, e não podemos garantir a segurança absoluta de suas informações.</p>

            <h2>5. Seus Direitos</h2>
            <p>Você tem o direito de:</p>
            <ul>
                <li>Acessar e obter uma cópia de suas informações pessoais.</li>
                <li>Solicitar a correção de informações pessoais incorretas ou incompletas.</li>
                <li>Solicitar a exclusão de suas informações pessoais.</li>
                <li>Opor-se ao processamento de suas informações pessoais.</li>
            </ul>

            <h2>6. Alterações nesta Política</h2>
            <p>Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova política nesta página. Recomendamos que você reveja esta política periodicamente para se manter informado sobre como estamos protegendo suas informações.</p>

            <h2>7. Contato</h2>
            <p>Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco em [e-mail de contato].</p>
        </div>
    );
}

export default PrivacyPolicy;
