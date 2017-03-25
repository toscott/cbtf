package org.cbtf.f2f.domain.configuration;

import org.cbtf.f2f.domain.entity.ChildSubcategory;
import org.cbtf.f2f.domain.repository.ChildSubcategoryRepository;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.converter.Converter;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

@Configuration
public class DomainConfiguration extends RepositoryRestConfigurerAdapter {

    private static final Converter<ChildSubcategory, ChildSubcategory.PK> CHILD_SUBCATEGORY_PK_CONVERTER = source -> new ChildSubcategory.PK(source.getSubcategory(), source.getChild());

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.withEntityLookup().forRepository(ChildSubcategoryRepository.class, CHILD_SUBCATEGORY_PK_CONVERTER, ChildSubcategoryRepository::findOne);
    }
}
