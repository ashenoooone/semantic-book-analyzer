from sqlalchemy.orm import declarative_base

from configs.Database import engine

EntityMeta = declarative_base()


def init():
    print(EntityMeta.metadata.tables)
    EntityMeta.metadata.create_all(bind=engine)
