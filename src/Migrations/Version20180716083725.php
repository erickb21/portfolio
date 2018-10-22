<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20180716083725 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE projets (id INT AUTO_INCREMENT NOT NULL, id_proj INT NOT NULL, label_proj VARCHAR(255) NOT NULL, description_proj LONGTEXT DEFAULT NULL, location_proj VARCHAR(255) DEFAULT NULL, duree_proj VARCHAR(255) DEFAULT NULL, vignette_proj VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE projtechno (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE projtechno_projets (projtechno_id INT NOT NULL, projets_id INT NOT NULL, INDEX IDX_306FCE16CFE20638 (projtechno_id), INDEX IDX_306FCE16597A6CB7 (projets_id), PRIMARY KEY(projtechno_id, projets_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE technos (id INT AUTO_INCREMENT NOT NULL, relation_id INT NOT NULL, label_tech VARCHAR(255) NOT NULL, description_tech LONGTEXT DEFAULT NULL, INDEX IDX_9452D61A3256915B (relation_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE projtechno_projets ADD CONSTRAINT FK_306FCE16CFE20638 FOREIGN KEY (projtechno_id) REFERENCES projtechno (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE projtechno_projets ADD CONSTRAINT FK_306FCE16597A6CB7 FOREIGN KEY (projets_id) REFERENCES projets (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE technos ADD CONSTRAINT FK_9452D61A3256915B FOREIGN KEY (relation_id) REFERENCES projtechno (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE projtechno_projets DROP FOREIGN KEY FK_306FCE16597A6CB7');
        $this->addSql('ALTER TABLE projtechno_projets DROP FOREIGN KEY FK_306FCE16CFE20638');
        $this->addSql('ALTER TABLE technos DROP FOREIGN KEY FK_9452D61A3256915B');
        $this->addSql('DROP TABLE projets');
        $this->addSql('DROP TABLE projtechno');
        $this->addSql('DROP TABLE projtechno_projets');
        $this->addSql('DROP TABLE technos');
    }
}
