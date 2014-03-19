#set( $symbol_pound = '#' )

package ${package}.internal;

import ${package}.ISimple;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Simple implements ISimple {
    private String name;
    protected static final Logger log = LoggerFactory.getLogger(Simple.class);

    @Override
    public String getName() {
        return name;
    }

    @Override
    public void setName(String name) {
        this.name = name;
    }

    void start() {
        log.info("Simple application starting");
    }

    void stop() {
        log.info("Simple application stopping");
    }
}
