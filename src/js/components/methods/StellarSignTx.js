/* @flow */
'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CommonActions from '../../actions/methods/CommonActions';
import * as StellarSignTxActions from '../../actions/methods/StellarSignTxActions';

import Response from './common/Response';

const StellarSignTx = (props): any => {

    const {
        response,
        tab,
        code,
        params,
    } = props.common;

    const {
        path,
        networkPassphrase,
        transaction,
    } = props.state;

    const {
        onSignTx,
        onPathChange,
        onPassphraseChange,
        onTransactionChange
    } = props.methodActions;

    const {
        onTabChange
    } = props.commonActions;

    return (
        <section className="method-content">

            <div className="method-params">

                <div className="row">
                    <label>Path</label>
                    <input type="text" className="small" value={ path } onChange={ event => onPathChange(event.target.value) } />
                </div>

                <div className="row">
                    <label>Network Passphrase</label>
                    <input type="text" value={ networkPassphrase } onChange={ event => onPassphraseChange(event.target.value) } />
                </div>

                <div className="transaction-json">
                    <label>Transaction JSON</label>
                    <textarea onChange={ event => onTransactionChange(event.target.value) } value={ transaction }>
                    </textarea>
                </div>

                <div className="row">
                    <label></label>
                    <button onClick={ event => onSignTx() }>Sign Stellar transaction</button>
                </div>
            </div>

            <Response 
                response={ response }
                code={ code }
                tab={ tab }
                onTabChange={ onTabChange } />

        </section>
    );
}

export default connect( 
    (state: State) => {
        return {
            common: state.common,
            state: state.stellarsigntx,
        };
    },
    (dispatch: Dispatch) => {
        return {
            commonActions: bindActionCreators(CommonActions, dispatch),
            methodActions: bindActionCreators(StellarSignTxActions, dispatch),
        };
    }
)(StellarSignTx);