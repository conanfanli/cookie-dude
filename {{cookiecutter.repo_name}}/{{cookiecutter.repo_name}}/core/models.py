import logging
from django.db import models
from django.contrib.postgres.fields import JSONField


LOGGER = logging.getLogger(__name__)


class Trail(models.Model):
    _blob = JSONField()
    created_ts = models.DateTimeField(auto_now_add=True)
    updated_ts = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'trails'

    def __str__(self) -> str:
        return str(self._blob)
