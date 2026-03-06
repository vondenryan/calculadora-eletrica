# Calculadora de Consumo de Energia

Este é um simples script em JavaScript para calcular o consumo mensal de energia de um eletrodoméstico com base na potência, tempo de uso e tipo de unidade de medida (Watt ou KiloWatt). O valor final é calculado com base no consumo de kWh e na tarifa de energia de R$ 0,90 por kWh.

## Funcionalidade

O script solicita ao usuário as seguintes informações:

1. **Eletrodoméstico**: O nome do aparelho.
2. **Tipo de Unidade de Potência**: O usuário escolhe entre **Watt** ou **KiloWatt**.
3. **Potência**: A potência do aparelho (em Watt ou KiloWatt).
4. **Tempo de Uso**: O tempo diário em que o eletrodoméstico é utilizado (em horas).
   
A partir dessas informações, o script calcula o consumo mensal em kWh e o valor total em reais, considerando que o uso é diário durante 30 dias no mês.

## Como Funciona

1. O usuário digita o nome do eletrodoméstico.
2. Escolhe se a potência fornecida está em Watt ou KiloWatt.
3. Digita o valor da potência e o tempo diário de uso.
4. O script calcula o consumo mensal de energia em kWh e o valor do custo mensal com base na tarifa de R$ 0,90 por kWh.

### Fórmulas

- **Watt para KWh**:
  \[
  \text{{kWh}} = \left( \frac{{\text{{potência (W)}} \times \text{{tempo de uso (horas)}}}}{1000} \right) \times 30
  \]

- **KiloWatt para KWh**:
  \[
  \text{{kWh}} = \text{{potência (kW)}} \times \text{{tempo de uso (horas)}} \times 30
  \]

- **Custo Mensal**:
  \[
  \text{{Custo}} = \text{{kWh}} \times 0.9
  \]

## Exemplo de Uso

1. Ao ser executado, o script pedirá para o usuário inserir o nome do eletrodoméstico.
2. O usuário escolherá a unidade de potência (Watt ou KiloWatt).
3. O script calculará o consumo mensal em kWh e o valor final de energia consumida, exibindo algo como:

Eletrodoméstico: Ferro de Passar
Kwh Mes: 18.00
Valor: 16.20