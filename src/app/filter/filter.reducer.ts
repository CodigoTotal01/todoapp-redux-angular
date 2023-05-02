import * as fromFiltro from './filter.actions';

const estadoInicial: fromFiltro.filtrosValidos = 'todos';
//indicamos al reducer el etado inicial y la accion que vendra
export function filtroReducer(state= estadoInicial, action:fromFiltro.acciones){
  switch (action.type){
    case fromFiltro.SET_FILTRO:
      return action.filtro;
    default:
      return state
  }
}

