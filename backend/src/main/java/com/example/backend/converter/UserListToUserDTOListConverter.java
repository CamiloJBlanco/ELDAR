package com.example.backend.converter;

import com.example.backend.model.User;
import com.example.backend.model.dto.UserDTO;
import lombok.Getter;
import lombok.Setter;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.util.List;

@Getter
@Component
@Setter
public class UserListToUserDTOListConverter implements Converter<List<User>, List<UserDTO>> {
    private final ModelMapper modelMapper;

    public UserListToUserDTOListConverter(final ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    @Override
    public List<UserDTO> convert(final List<User> source) {
        return modelMapper.map(source, new TypeToken<List<UserDTO>>() {
        }.getType());
    }
}