#set( $symbol_pound = '#' )

package ${package}.northbound;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.SecurityContext;

import ${package}.ISimple;
import org.codehaus.enunciate.jaxrs.StatusCodes;
import org.codehaus.enunciate.jaxrs.TypeHint;
import org.opendaylight.controller.sal.utils.ServiceHelper;

/**
 * Northbound REST API
 *
 * This entire web class can be accessed via /northbound prefix as specified in
 * web.xml
 *
 * <br>
 * <br>
 * Authentication scheme : <b>HTTP Basic</b><br>
 * Authentication realm : <b>opendaylight</b><br>
 * Transport : <b>HTTP and HTTPS</b><br>
 * <br>
 * HTTPS Authentication is disabled by default.
 */
@Path("/")
public class AppNorthbound {
    private String username;

    @Context
    public void setSecurityContext(SecurityContext context) {
        if (context != null && context.getUserPrincipal() != null) {
            username = context.getUserPrincipal().getName();
        }
    }

    /**
     *
     * Sample GET REST API call
     *
     * @return A response string
     *
     * <pre>
     * Example:
     *
     * Request URL:
     * http://localhost:8080/app/northbound/api
     *
     * Response body in XML:
     * &lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
     * Sample Northbound API
     *
     * Response body in JSON:
     * Sample Northbound API
     * </pre>
     */
    @Path("/simple")
    @GET
    @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
    @TypeHint(String.class)
    @StatusCodes()
    public String getSimple() {
        ISimple simple = (ISimple) ServiceHelper.getGlobalInstance(ISimple.class, this);
        return simple.getName();
    }

    /**
     *
     * Sample POST REST API call
     *
     * @return A response string
     *
     *         <pre>
     * Example:
     *
     * Request URL:
     * http://localhost:8080/app/northbound/api
     *
     * Response body in XML:
     * &lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
     * Sample Northbound API
     *
     * Response body in JSON:
     * Sample Northbound API
     * </pre>
     */
    @Path("/simple")
    @POST
    @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
    @TypeHint(String.class)
    @StatusCodes()
    public String setSimple(@TypeHint(String.class) String simpleName) {
        ISimple simple = (ISimple) ServiceHelper.getGlobalInstance(ISimple.class, this);
        simple.setName(simpleName);
        return simple.getName();
    }
}
