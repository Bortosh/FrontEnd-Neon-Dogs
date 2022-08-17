export function validation(input){
    let errors = {};

    if(input.name.length < 3 || input.name.trim().length === 0){
        errors.name ="(--enter the name please--)";
    }else if(input.name.search(/^[a-zA-Z\s]*$/) || input.name.search(/^\S/) ){
        errors.name = '(--No numbers, symbols or blanks are allowed in the name--)'
    }

    if(!input.minHeight){
        errors.minHeight ="(--Enter the minimum height please--)";
    }else if( parseInt(input.minHeight) > parseInt(input.maxHeight)){
        errors.minHeight = "(--The minimum height cannot be greater than the maximum height--)";
    }else if(input.minHeight < 0){
        errors.minHeight = "(--Negative numbers are not allowed--)"
    }

    if(!input.maxHeight){
        errors.maxHeight ="(--Enter the miximum height please--)";
    }else if( parseInt(input.maxHeight) < parseInt(input.minHeight) ){
        errors.maxHeight = "(--The miximum height cannot be minor than the minimum height--)";
    }else if(input.maxHeight < 0){
        errors.maxHeight = "(--Negative numbers are not allowed--)"
    }else if(input.maxHeight > 100){
        errors.maxHeight = "(--The Dog is very tall)"
    }

    if(!input.minWeight){
        errors.minWeight ="(--Enter the minimum Weight please--)";
    }else if( parseInt(input.minWeight) > parseInt(input.maxWeight)){
        errors.minWeight = "(--The minimum weight cannot be greater than the maximum weight--)";
    }else if(input.minWeight < 0){
        errors.minWeight = "(--Negative numbers are not allowed--)"
    }

    if(!input.maxWeight){
        errors.maxWeight ="(--Enter the miximum Weight please--)";
    }else if( parseInt(input.maxWeight) < parseInt(input.minWeight) ){
        errors.maxWeight = "(--The maximum height cannot be minor than the minimum height--)";
    }else if(input.maxWeight < 0){
        errors.maxWeight = "(--Negative numbers are not allowed--)"
    }

    if(!input.minlife_span){
        errors.minlife_span ="(--Enter the minimum years please--)";
    }else if( parseInt(input.minlife_span) > parseInt(input.maxlife_span)){
        errors.minlife_span = "(--The minimum years cannot be greater than the maximum years--)";
    }else if(input.minlife_span < 0){
        errors.minlife_span = "(--Negative numbers are not allowed--)"
    }

    if(!input.maxlife_span){
        errors.maxlife_span ="(--Enter the miximum years please--)";
    }else if( parseInt(input.maxlife_span) < parseInt(input.minlife_span) ){
        errors.maxlife_span = "(--The maximum years cannot be minor than the minimum years--)";
    }else if(input.maxlife_span < 0){
        errors.maxlife_span = "(--Negative numbers are not allowed--)"
    }
    
    return errors;

    
}