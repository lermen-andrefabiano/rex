package br.com.web;

import java.util.ArrayList;

import br.com.caelum.vraptor.Consumes;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.HeaderParam;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Resource;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.view.Results;
import br.com.dto.ClienteDTO;
import br.com.dto.ContatoDTO;
import br.com.dto.RetornoDTO;

@Resource
@Path("cliente")
public class ClienteController extends AbstractController{

	private final Result result;

	public ClienteController(Result result) {
		this.result = result;
	}
	
	//http://localhost:8080/rex/cliente/listAll
	@Get
	@Path("/listAll")
	public void listAll() {
		log.info("listAll");
		ArrayList<ClienteDTO> clientes = new ArrayList<>();
		clientes.add(new ClienteDTO(1L, "ANDRE", "AV BRASIL, 200", new ArrayList<ContatoDTO>()));	
		clientes.add(new ClienteDTO(2L, "PEDRO", "RUA OTAVIO ROCHA, 563",  new ArrayList<ContatoDTO>()));
		clientes.add(new ClienteDTO(3L, "JOAO", "MARQUES DE MARICA, 410",  new ArrayList<ContatoDTO>()));
		clientes.add(new ClienteDTO(4L, "ANA", "ALAVO BILAQUE, 8963",  new ArrayList<ContatoDTO>()));

		result.use(Results.json()).withoutRoot().from(clientes).serialize();

	}
	
	//http://localhost:8080/rex/cliente/10
	@Get
	@Path("/{clienteId}")
	public void obterPorId(@HeaderParam("usuarioId") String usuarioId, Long clienteId){		
		log.debug("usuarioId: "+usuarioId +" clienteId: "+clienteId);		
		
		result.use(Results.xml()).from(usuarioId, "usuarioId").serialize();		
	}
	
	//http://localhost:8080/rex/cliente/empresa?empresaId=100
	@Get
	@Path("/empresa")
	public void obterPorEmpresa(@HeaderParam("usuarioId") String usuarioId, Long empresaId){		
		log.debug("usuarioId: "+usuarioId +" empresa: "+empresaId);				
		RetornoDTO retorno = new RetornoDTO(usuarioId, empresaId);	
		
		result.use(Results.xml()).from(retorno).serialize();		
	}
	
	@Post
	@Path("/salvar")
	@Consumes("application/json")
	public void dtoToXML(ClienteDTO cliente){		
		log.debug("dtoToXML " + cliente.id + " " + cliente.nome + " "+ cliente.endereco + " " + cliente.contatos);		
		result.use(Results.xml()).from(cliente).exclude("contatos").serialize();		
	}

}
