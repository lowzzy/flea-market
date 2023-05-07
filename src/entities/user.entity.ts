import { UserStatus } from 'src/auth/user-status.enum';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  password: string;

  @Column({ unique: true })
  status: UserStatus;
}
