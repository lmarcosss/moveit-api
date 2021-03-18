
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
  
  @Entity('experiences')
  class Experience {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    points: number;

    @Column({ name: 'completed_challenges' })
    completedChallenges: number;

    @Column()
    level: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default Experience;