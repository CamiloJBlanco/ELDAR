package com.example.backend.model.enums;

public enum UserEnum {

    SINCONFIRMAR("sin confirmar"),
    CONFIRMADO("confirmado");

    private final String descripcion;

    UserEnum(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getDescripcion() {
        return descripcion;
    }
}
