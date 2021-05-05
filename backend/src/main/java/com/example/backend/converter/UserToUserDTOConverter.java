package com.example.backend.converter;

import com.example.backend.model.User;
import com.example.backend.model.dto.UserDTO;
import org.modelmapper.ModelMapper;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class UserToUserDTOConverter implements Converter<User, UserDTO>{
    private final ModelMapper modelMapper;

    public UserToUserDTOConverter(final ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    @Override
    public UserDTO convert(User source) {
        return modelMapper.map(source, UserDTO.class);
    }
}
