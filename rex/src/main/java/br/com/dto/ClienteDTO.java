package br.com.dto;

import java.util.List;

public class ClienteDTO {

	public Long id;

	public String nome;

	public String endereco;

	public List<ContatoDTO> contatos;

	public ClienteDTO() {
	}

	public ClienteDTO(Long id, String nome, String endereco,
			List<ContatoDTO> contatos) {
		super();
		this.id = id;
		this.nome = nome;
		this.endereco = endereco;
		this.contatos = contatos;
	}

}
