import { Controller } from '@nestjs/common';
import { CategoriaService } from '../services/categoria.service';

@Controller('/categoria')
export class CategoriaController {
  constructor(private readonly CategoriaService: CategoriaService) {}
}
