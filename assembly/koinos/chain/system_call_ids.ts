export namespace system_call_ids {
  export enum system_call_id {
    nop = 0,
    get_head_info = 1,
    apply_block = 2,
    apply_transaction = 3,
    apply_upload_contract_operation = 4,
    apply_call_contract_operation = 5,
    apply_set_system_call_operation = 6,
    apply_set_system_contract_operation = 7,
    pre_block_callback = 8,
    post_block_callback = 9,
    pre_transaction_callback = 10,
    post_transaction_callback = 11,
    get_chain_id = 12,
    process_block_signature = 101,
    get_transaction = 102,
    get_transaction_field = 103,
    get_block = 104,
    get_block_field = 105,
    get_last_irreversible_block = 106,
    get_account_nonce = 107,
    verify_account_nonce = 108,
    set_account_nonce = 109,
    check_system_authority = 110,
    get_operation = 111,
    get_account_rc = 201,
    consume_account_rc = 202,
    get_resource_limits = 203,
    consume_block_resources = 204,
    put_object = 301,
    remove_object = 302,
    get_object = 303,
    get_next_object = 304,
    get_prev_object = 305,
    log = 401,
    event = 402,
    hash = 501,
    recover_public_key = 502,
    verify_merkle_root = 503,
    verify_signature = 504,
    verify_vrf_proof = 505,
    call = 601,
    exit = 602,
    get_arguments = 603,
    get_contract_id = 604,
    get_caller = 605,
    check_authority = 606,
    get_contract_name = 10000,
    get_contract_address = 10001,
  }
}
