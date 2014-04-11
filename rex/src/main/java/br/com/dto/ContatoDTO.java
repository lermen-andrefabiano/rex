package br.com.dto;

public class ContatoDTO {

	public Long id;

	public String descricao;

	public String tipo;

	public ContatoDTO() {

	}

	public ContatoDTO(Long id, String descricao, String tipo) {
		super();
		this.id = id;
		this.descricao = descricao;
		this.tipo = tipo;
	}

}
